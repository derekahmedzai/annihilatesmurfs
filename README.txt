/* $Id$ */

When a search returns no results, this text is returned:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Your search yielded no results
* Check if your spelling is correct.
* Remove quotes around phrases to match each word individually: "blue smurf" will match less than blue smurf.
* Consider loosening your query with OR: blue smurf will match less than blue OR smurf.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The words "blue smurf" are unlikely to be appropriate for most websites, and the site owner usually wants to change them.
Unfortunately, the text is hardcoded, and can only be overriden if you are using a custom translation or the String Overrides module.
This isn't something you would want to expose to a site owner though.

The Annihilate smurfs module lets users with the appropriate permission choose their own search words to display when no results are found.

Background
----------------------------------------
For background see: How to Change "Search Yields no Result Text"
http://drupal.org/node/130391
And: Replace "blue smurf" in no search results message
http://drupal.org/node/242048

Features
----------------------------------------
See a live preview of the new text as you type.

Installation
----------------------------------------
Copy the annihilatesmurfs module folder to your module directory and then 
enable on the admin modules page.

Permissions
----------------------------------------
Grant the "administer annihilatesmurfs" permission to allow access to the settings page.

Author
----------------------------------------
Derek Ahmedzai
derek@sharpshooter.org
