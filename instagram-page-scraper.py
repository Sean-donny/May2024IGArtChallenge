from crawlbase import CrawlingAPI
import os
import json
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get the Crawlbase API token from environment variables
crawlbase_token = os.getenv('CRAWLBASE_API_TOKEN')

# URL of the Instagram post to scrape
instagram_post_url = 'https://www.instagram.com/p/C8UYhX2MtlM/'

# Options for Crawling API
options = {
    'scraper': 'instagram-post',
}

# Create a Crawlbase API instance with your token
api = CrawlingAPI({'token': crawlbase_token })

try:
    # Send a GET request to crawl the URL with options
    response = api.get(instagram_post_url, options=options)

    # Check if the response status code is 200 (OK)
    if response.get('status_code', 0) == 200:
        # Parse the JSON response
        response_body_json = response.get('json', {})

        # Print the scraped data for debugging
        print(json.dumps(response_body_json, indent=2))

        # Write the scraped data to a new file
        output_file = 'instagram_scraped_data.json'
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(response_body_json, f, ensure_ascii=False, indent=2)
        
        print(f"Scraped data saved to '{output_file}' successfully.")

    else:
        print(f"Request failed with status code: {response.get('status_code', 0)}")

except KeyError as ke:
    # Handle specific JSON parsing errors
    print(f"Error processing JSON response: {str(ke)}")
except Exception as e:
    # Handle any other unexpected exceptions
    print(f"Unexpected error: {str(e)}")





