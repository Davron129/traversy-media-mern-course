// @desc get all goals
// @route GET /api/goals
// @access Private

const GET = async (req, res) => {
    res.status(200).json({
        status: true,
        message: "Get all goals"
    })
}

// @desc post new goal
// @route POST /api/goals
// @access Private

const POST = async (req, res) => {
    if(!req.body.message) {
        res.status(400)
        throw new Error("Please add text field")
    }

    res.status(200).json({
        status: true,
        message: "Add new Goal"
    })
}

// @desc edit goal
// @route PUT /api/goals/:id
// @access Private

const PUT = async (req, res) => {
    res.status(200).json({
        status: true,
        message: "Edit Goal " + req.params.id
    })
}

// @desc delete goal
// @route DELETE /api/goals/:id
// @access Private

const DELETE = async (req, res) => {
    res.status(200).json({
        status: true,
        message: "Delete Goal " + req.params.id
    })
}

module.exports = {
    GET,
    POST,
    PUT,
    DELETE
}