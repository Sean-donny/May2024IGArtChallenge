# Instagram Art Competition Results Website

This is a Next.js website that displays the results from an Instagram art competition. The comments were scraped and processed to extract votes, and the results are displayed using a bar chart.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Data Scraping](#data-scraping)
- [Running the Vote Processor](#running-the-vote-processor)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Images](#images)

## Overview

This project showcases the voting results of an Instagram art competition. The comments containing votes were initially scraped using Python, but due to rate limits, the comments were manually scraped and stored in a text file. The comments are processed to extract votes, which are then displayed in a bar chart on the website.

## Technologies Used

- Next.js
- React
- Node.js
- Tailwind CSS
- Python (partially for initial scraping)


## Data Scraping
The comments were partially scraped using Python. Due to crawler rate limits, the comments were manually copied from Instagram via the browser and saved in a file named comments3.txt. Previous attempts were saved in comments.txt and comments2.txt to ensure all comments were accurately copied.

## Running the Vote Processor
Navigate to the directory containing voteProcessor.js.

Run the vote processor:
node voteProcessor.js
This will create a votingResults.json file. Move this file into the src folder to use the data for populating the BarChart component.

## File Structure

|-- src/
|   |-- app/
|   |   |-- page.tsx
|   |   |-- layout.tsx
|-- public/
|   |-- images/
|-- comments.txt
|-- comments2.txt
|-- comments3.txt
|-- voteProcessor.js
|-- votingResults.json
|-- package.json
|-- README.md

src/app/page.tsx: Contains the main JSX for the site.
src/app/layout.tsx: Sets up the title, metadata, and imports the custom font "DM Sans".
voteProcessor.js: Processes the comments to extract votes and creates votingResults.json.
public/images/: Contains images used on the site.
comments3.txt: Contains manually scraped comments.
## Usage
After running voteProcessor.js, move the generated votingResults.json file to the src folder.
The data from votingResults.json is used to populate the BarChart component in the main page.
## Images
All images used on the site are stored in the public folder.
