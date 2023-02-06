export const sheet1Data = {
    name: "sheet1",
    cellsObj: {
        "0": { text: "Movie Name", style: 4, editable: false, dbKey: "movie_name" },
        "1": { text: "Title", style: 4, editable: false, dbKey: "title" },
        "2": { text: "Subtitle", style: 4, editable: false, dbKey: "sub_title" },
        "3": { text: "Is Ticket", style: 4, editable: false, dbKey: "is_ticket" },
        "4": { text: "Is Released", style: 4, editable: false, dbKey: "is_released" },
        "5": { text: "Is Visible", style: 4, editable: false, dbKey: "is_visible" },
        "6": { text: "Age limit", style: 4, editable: false, dbKey: "age_limit" },
        "7": { text: "Sorting order", style: 4, editable: false, dbKey: "sorting_order" },
        "8": { text: "Published At", style: 4, editable: false, dbKey: "published_at" },
        "9": { text: "Cast", style: 4, editable: false, dbKey: "cast" },
        "10": { text: "Description", style: 4, editable: false, dbKey: "description" },
        "11": { text: "Video URL", style: 4, editable: false, dbKey: "video_url" },
        "12": { text: "Trailer URL", style: 4, editable: false, dbKey: "trailer_url" },
        "13": { text: "Duration", style: 4, editable: false, dbKey: "duration" },
    },
    data: [
        {
            _id: "123456",
            movie_name: "testmovie",
            title: "ss",
            sub_title: "testsubtitle",
            is_released: true,
            is_ticket: true,
            is_visible: false,
            age_limit: "testage",
            sorting_order: "1",
            published_at: "2022-12-12",
            cast: "testcast",
            description: "testdesc",
            video_url: "testvideourl",
            trailer_url: "testtrailerurl",
            duration: "testduration",
        },
        {
            _id: "12345678",
            movie_name: "testmovie",
            title: "ss",
            sub_title: "testsubtitle",
            is_released: true,
            is_ticket: true,
            is_visible: false,
            age_limit: "testage",
            sorting_order: "1",
            published_at: "2022-12-12",
            cast: "testcast",
            description: "testdesc",
            video_url: "testvideourl",
            trailer_url: "testtrailerurl",
            duration: "testduration",
        },
    ],
    validation: [
        {
            "refs": [
                "D2:D100"
            ],
            "mode": "cell",
            "type": "list",
            "required": true,
            "operator": "be",
            "value": "TRUE,FALSE"
        },
        {
            "refs": [
                "E2:E100"
            ],
            "mode": "cell",
            "type": "list",
            "required": true,
            "operator": "be",
            "value": "TRUE,FALSE"
        },
        {
            "refs": [
                "F2:F100"
            ],
            "mode": "cell",
            "type": "list",
            "required": true,
            "operator": "be",
            "value": "TRUE,FALSE"
        },
        {
            "refs": [
                "I2:I100"
            ],
            "mode": "cell",
            "type": "date",
            "required": true,
        },
        // {
        //     "refs": [
        //         "I2:I100"
        //     ],
        //     "mode": "cell",
        //     "type": "date",
        //     "required": true,
        // },
        {
            "refs": [
                "G2:G100"
            ],
            "mode": "cell",
            "type": "number",
            "required": true,
            "operator": "be",
            "value": ["10", "90"]
        }
    ],
    colLen: 14,
    api: "http://localhost:5000/sheet1",
    method: "POST"
}

// module.exports = sheet1Data