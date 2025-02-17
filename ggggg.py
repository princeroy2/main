import requests

# Define the API URL
url = "https://min-api.cryptocompare.com/data/all/coinlist"

# Send GET request to the API
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    data = response.json()  # Parse the response JSON data
    # Print the entire data or process as needed
    print(data)
else:
    print(f"Failed to fetch data. Status code: {response.status_code}")
