# DateTime Card for Home Assistant

This custom Lovelace card displays the current date and time in `DD.MM.YYYY` and `HH:MM` format, respectively. It's designed for easy integration into Home Assistant and allows for simple customization.

## Installation

### Using HACS (Home Assistant Community Store)

- Ensure you have [HACS](https://hacs.xyz/) installed in your Home Assistant instance.
- Go to HACS > Frontend > "+ Explore & Add Repositories" button.
- Search for "DateTime Card" and add it.
- Add the resource reference in your `configuration.yaml` or through the Lovelace Dashboard configuration as shown below.

### Manual Installation

1. Download `datetime-card.js` from this repository.
2. Place the file in your `www` folder inside your Home Assistant configuration directory.
3. Add a resource reference to your Lovelace configuration:

```yaml
resources:
  - url: /local/datetime-card.js
    type: module
