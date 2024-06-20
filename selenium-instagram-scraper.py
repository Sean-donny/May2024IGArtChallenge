from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Set up Chrome WebDriver (make sure you have chromedriver installed: https://sites.google.com/chromium.org/driver/)
driver = webdriver.Chrome()

# URL of the Instagram post to scrape
instagram_post_url = 'https://www.instagram.com/p/C8UYhX2MtlM/'

try:
    # Open Instagram post in Chrome browser
    driver.get(instagram_post_url)

    # Wait for the comments section to load
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, '.C4VMK span')))

    # Scroll down to load comments (simulate scrolling)
    body = driver.find_element(By.TAG_NAME, 'body')
    for _ in range(5):  # Adjust scroll count as needed
        body.send_keys(Keys.PAGE_DOWN)
        time.sleep(1)  # Adjust scroll delay as needed

    # Extract comments
    comments = driver.find_elements(By.CSS_SELECTOR, '.C4VMK span')

    # Print or process comments
    for comment in comments:
        print(comment.text)

except Exception as e:
    print(f"Error: {str(e)}")

finally:
    # Close the browser session
    driver.quit()
