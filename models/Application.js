const mongoose = require('mongoose')
const Schema = mongoose.Schema

const applicationSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String,
        default: ''
    },
    logoDescr: {
        type: String,
        default: ''
    },
    colors: {
        type: String,
        default: ''
    },
    unsecure: {
        type: String,
        default: ''
    },
    classes: [
        {
            Number: {
                type: String,
                default: ''
            },
            Categories: [
                {
                    Number: {
                        type: String,
                        default: ''
                    },
                    Title: {
                        type: String,
                        default: ''
                    },
                }
            ]
        }
    ],
    applicant: {
        ref: 'applicants',
        type: Schema.Types.ObjectId
    },
    mode: {
        type: String,
        required: true
    },
    options: [
        {
            option: {
                type: String
            },
            price: {
                type: Number
            }
        }
    ],
    price: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    payed: {
        type: Boolean,
        default: false
    },
    documents: [
        {
            type: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('applications',applicationSchema)
