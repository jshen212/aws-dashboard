const weatherConditions = {
    '200': {
        'weather': 'thunderstorm with light rain',
        'icon': '11d'
    },
    '201': {
        'weather': 'thunderstorm with rain',
        'icon': '11d'
    },
    '202': {
        'weather': 'thunderstorm with heavy rain',
        'icon': '11d'
    },
    '210': {
        'weather': 'light thunderstorm',
        'icon': '11d'
    },
    '211': {
        'weather': 'thunderstorm',
        'icon': '11d'
    },
    '212': {
        'weather': 'heavy thunderstorm',
        'icon': '11d'
    },
    '221': {
        'weather': 'ragged thunderstorm',
        'icon': '11d'
    },
    '230': {
        'weather': 'thunderstorm with light drizzle',
        'icon': '11d'
    },
    '231': {
        'weather': 'thunderstorm with drizzle',
        'icon': '11d'
    },
    '232': {
        'weather': 'thunderstorm with heavy drizzle',
        'icon': '11d'
    },
    '300': {
        'weather': 'light intensity drizzle',
        'icon': '09d'
    },
    '301': {
        'weather': 'drizzle',
        'icon': '09d'
    },
    '302': {
        'weather': 'heavy intensity drizzle',
        'icon': '09d'
    },
    '310': {
        'weather': 'light intensity drizzle rain',
        'icon': '09d'
    },
    '311': {
        'weather': 'drizzle rain',
        'icon': '09d'
    },
    '312': {
        'weather': 'heavy intensity drizzle rain',
        'icon': '09d'
    },
    '313': {
        'weather': 'shower rain and drizzle',
        'icon': '09d'
    },
    '314': {
        'weather': 'heavy shower rain and drizzle',
        'icon': '09d'
    },
    '321': {
        'weather': 'shower drizzle',
        'icon': '09d'
    },

    '500': {
        'weather': 'light rain',
        'icon': '10d'
    },
    '501': {
        'weather': 'moderate rain',
        'icon': '10d'
    },
    '502': {
        'weather': 'heavy intensity rain',
        'icon': '10d'
    },
    '503': {
        'weather': 'very heavy rain',
        'icon': '10d'
    },
    '504': {
        'weather': 'extreme rain',
        'icon': '10d'
    },
    '511': {
        'weather': 'freezing rain',
        'icon': '13d'
    },
    '520': {
        'weather': 'light intensity shower rain',
        'icon': '09d'
    },
    '521': {
        'weather': 'shower rain',
        'icon': '09d'
    },
    '522': {
        'weather': 'heavy intensity shower rain',
        'icon': '09d'
    },
    '531': {
        'weather': 'ragged shower rain',
        'icon': '09d'
    },
    '600': {
        'weather': 'light snow',
        'icon': '13d'
    },
    '601': {
        'weather': 'snow',
        'icon': '13d'
    },
    '602': {
        'weather': 'heavy snow',
        'icon': '13d'
    },
    '611': {
        'weather': 'sleet',
        'icon': '13d'
    },
    '612': {
        'weather': 'shower sleet',
        'icon': '13d'
    },
    '615': {
        'weather': 'light rain and snow',
        'icon': '13d'
    },
    '616': {
        'weather': 'rain and snow',
        'icon': '13d'
    },
    '620': {
        'weather': 'light shower snow',
        'icon': '13d'
    },
    '621': {
        'weather': 'shower snow',
        'icon': '13d'
    },
    '622': {
        'weather': 'heavy shower snow',
        'icon': '13d'
    },
    '701': {
        'weather': 'mist',
        'icon': '50d'
    },
    '711': {
        'weather': 'smoke',
        'icon': '50d'
    },
    '721': {
        'weather': 'haze',
        'icon': '50d'
    },
    '731': {
        'weather': 'sand, dust whirls',
        'icon': '50d'
    },
    '741': {
        'weather': 'fog',
        'icon': '50d'
    },
    '751': {
        'weather': 'sand',
        'icon': '50d'
    },
    '761': {
        'weather': 'dust',
        'icon': '50d'
    },
    '762': {
        'weather': 'volcanic ash',
        'icon': '50d'
    },
    '771': {
        'weather': 'squalls',
        'icon': '50d'
    },
    '781': {
        'weather': 'tornado',
        'icon': '50d'
    },
    '800': {
        'weather': 'clear sky',
        'icon': '01d 01n'
    },
    '801': {
        'weather': 'few clouds',
        'icon': '02d 02n'
    },
    '802': {
        'weather': 'scattered clouds',
        'icon': '03d 03n'
    },
    '803': {
        'weather': 'broken clouds',
        'icon': '04d 04n'
    },
    '804': {
        'weather': 'overcast clouds',
        'icon': '04d 04n'
    },
    '900': {
        'weather': 'tornado',
        'icon': ''
    },
    '901': {
        'weather': 'tropical storm',
        'icon': ''
    },
    '902': {
        'weather': 'hurricane',
        'icon': ''
    },
    '903': {
        'weather': 'cold',
        'icon': ''
    },
    '904': {
        'weather': 'hot',
        'icon': ''
    },
    '905': {
        'weather': 'windy',
        'icon': ''
    },
    '906': {
        'weather': 'hail',
        'icon': ''
    },

    '951': {
        'weather': 'calm',
        'icon': ''
    },
    '952': {
        'weather': 'ligth breeze',
        'icon': ''
    },
    '953': {
        'weather': 'gentle breeze',
        'icon': ''
    },
    '954': {
        'weather': 'moderate breeze',
        'icon': ''
    },
    '955': {
        'weather': 'fresh breeze',
        'icon': ''
    },

    '956': {
        'weather': 'strong breeze',
        'icon': ''
    },
    '957': {
        'weather': 'high wind, near gale',
        'icon': ''
    },
    '958': {
        'weather': 'gale',
        'icon': ''
    },
    '959': {
        'weather': 'severe gale',
        'icon': ''
    },
    '960': {
        'weather': 'storm',
        'icon': ''
    },
    '961': {
        'weather': 'violent storm',
        'icon': ''
    },
    '962': {
        'weather': 'hurricane',
        'icon': ''
    }
};

exports.weatherConditions = weatherConditions;