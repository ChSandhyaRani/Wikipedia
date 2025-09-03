🔎 Wikipedia Search App:
  
  A simple and responsive Wikipedia search interface using HTML, CSS, and JavaScript. It uses the API: https://apis.ccbp.in/wiki-search?search=
  to fetch and display real-time search results as the user types and presses Enter.
	

✨ Features:

	1. Search Wikipedia in real-time using keywords
	2. Displays article title, description, and direct link
	3. Open articles in a new tab
	4. Loading spinner while fetching results
	5. Clean and readable result layout

🛠️ Built With

	1. HTML5 – Structure and elements
	2. CSS3 – Styling (spinner, layout, etc.)
	3. JavaScript (ES6) – Functionality
	4. Fetch API – For calling the Wikipedia API

📦 How It Works

	1.Input Detection:
	The app listens for the Enter key when the user types in the search bar.
	
	2. API Call:
	Makes a GET request to:
	https://apis.ccbp.in/wiki-search?search=your-query
	
	3. Spinner:
	A loading spinner is shown while waiting for the API response.

🧱 Result Rendering

	Each result includes:
	1. Title (as a clickable link)
	2. URL (clickable)
	3. Description (short summary)

📄 Key Functions:

	1. searchWikipedia(event)
		->Triggered on keydown.
		->If Enter is pressed:
				Clears previous results.
				Displays spinner.
				Fetches search results and passes them to the display function.
	
	2. displaySearchResults(results)	
		->Hides the spinner.
		->Iterates through the search results and calls createAndAppendResults().
		
	3. createAndAppendResults(result)
		-> Dynamically creates and appends DOM elements for:
				Title (as a link)
				Link URL
				Description paragraph

🖼️ UI Preview:
simplesearch.ccbp.tech
