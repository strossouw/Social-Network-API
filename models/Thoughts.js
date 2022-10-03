const { Schema, model, Types } = require('mongoose');

const dateFormatter = require('../utils/dateFormat')
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 200
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormatter(timestamp)
    }
},
{
    toJSON: {
        getters: true
    }
}
);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 20,
        max: 400
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema],
},
{
    toJSON: 
        {
            virtuals: true,
            getters: true
        },
        id: false
}
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}) 

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;