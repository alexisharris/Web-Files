const data = {"widget": {

    "debug": "on",

    "window": {

        "title": "Sample Konfabulator Widget",

        "name": "main_window",

        "width": 500,

        "height": 500

    },

    "image": {

        "title": "sun",

        "name": "sun1",

        "hOffset": 250,

        "vOffset": 250,

        "alignment": "center"

    },

    "text": {

        "data": "Click Here",

        "size": 36,

        "style": "bold",

        "name": "text1",

        "hOffset": 250,

        "vOffset": 100,

        "alignment": "center",

        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"

    }

}}


console.log(data.widget.alignment)
