const fs = require('fs');

// File path to your comments file
const filePath = './comments3.txt';

// Read file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Remove Instagram message
  const cleanedData = data.replace(/Hidden by Instagram/g, '');

  // Split comments by 'Reply' signature and trim each comment
  const rawComments = cleanedData.split('Reply').map(comment => comment.trim());

  // Regular expression to match each comment entry, considering optional like count
  const COMMENT_REGEX =
    /^(.+)'s\sprofile\spicture\s*([\s\S]*?)\s*(\d+[hd](?:\d\slikes?)?)\s*$/;

  // Arrays to store processed comments, irregular votes, and late submissions
  const processedComments = [];
  const irregularVotes = [];
  const lateSubmissions = [];

  // Loop through raw comments and match against regex
  rawComments.forEach(comment => {
    const match = comment.match(COMMENT_REGEX);
    if (match) {
      const username = match[1].trim();
      const message = match[2].trim();
      const submitted = match[3].match(/(\d+[hd])/)[0]; // Extract only the submitted time

      // Check if message is empty
      if (message === '') {
        console.log('Empty message:', comment);
        return; // Skip processing this comment further
      }

      // Check against late submissions (submitted less than 8 hours ago)
      const hoursMatch = submitted.match(/(\d+)h/);
      if (hoursMatch && parseInt(hoursMatch[1], 10) < 8) {
        lateSubmissions.push({ username, message, submitted });
        return; // Skip processing this comment further
      }

      // Extract the first occurrence of a number between 1 and 4 as vote
      const voteMatch = message.match(/[1-4]/);
      if (voteMatch) {
        const vote = voteMatch[0];
        const processedComment = {
          username,
          vote,
          submitted,
        };
        processedComments.push(processedComment);
      } else {
        irregularVotes.push({ username, message, submitted });
      }
    }
  });

  // Object to store voting results
  const talliedVotes = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };

  // Object to store voters
  const talliedVoters = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  // Tally the votes and store the voters
  for (const comment of processedComments) {
    const vote = comment.vote;
    talliedVotes[vote]++;
    talliedVoters[vote].push(comment.username);
  }

  // Output results
  console.log('Total Comments:', rawComments.length);
  console.log('Irregular Votes:', irregularVotes.length);
  console.log('Late Submissions:', lateSubmissions.length);
  console.log('Number of processed comments:', processedComments.length);
  console.log('Voting results:', talliedVotes);
  console.log('Voters:', talliedVoters);
});
