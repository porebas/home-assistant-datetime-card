DateTime Card for Home Assistant
The DateTime Card is a custom Lovelace card for Home Assistant that displays the current date and time. This card is designed to be easy to install, customize, and use within your Home Assistant environment. The date and time are displayed in the format DD.MM.YYYY and HH:MM respectively, offering a simple and clear view of the current time and date.

Prerequisites
Home Assistant installation
HACS (Home Assistant Community Store) installed
Installation
Add Custom Repository to HACS:

Navigate to HACS in your Home Assistant sidebar.
Go to "Integrations" and then click on the three dots in the top right corner and select "Custom repositories".
Add the URL of this GitHub repository and select Lovelace as the category.
Click "Add".
Install DateTime Card:

Still in HACS, go to "Integrations".
Find the DateTime Card in the list of new repositories and click "Install".
Add the Resource:
After installation, you need to add a reference to the DateTime Card in your Lovelace configuration to load the card.

Navigate to "Configuration" > "Lovelace Dashboards".
Click on "Resources" tab.
Click the "Add Resource" button and add the URL path to the DateTime Card script: /hacsfiles/datetime-card/datetime-card.js as a JavaScript Module.
Configuration
To add the DateTime Card to your Lovelace UI, edit your dashboard and add a new manual card with the following configuration:

yaml
Copy code
type: 'custom:datetime-card'
Customization
The card is designed to be easily customizable. You can modify the source code to change the date and time format, as well as the card's style including font, background color, and size.

Support
If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Contributions are also welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.
