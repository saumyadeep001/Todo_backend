// import the model
const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try {
        // fetch all todo items from database 
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success: true,
            data: todos, // corrected the variable name
            message: "Entire Todo Data is fetched",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error", // standardized error message capitalization
            message: err.message,
        });
    }
};


exports.getTodoById = async (req, res) => {
    try {
        // Extract the ID from the request parameters
        const id = req.params.id;

        // Find the Todo item by ID
        const todo = await Todo.findById(id); // No need for `{_id: id}`; `findById` automatically uses the ID

        // Check if Todo item exists
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found for the given ID",
            });
        }

        // Return the found Todo item
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        });
    }
};


