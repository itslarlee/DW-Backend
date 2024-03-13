import Employee from "../models/employees.model.js";

export const addEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findOneAndUpdate({ code: req.params.code }, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).send({ message: "Employee not found." });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const result = await Employee.deleteOne({ code: req.params.code });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: "Employee not found." });
        }
        res.status(200).json({ message: "Employee successfully deleted." });
    } catch (error) {
        res.status(500).send(error);
    }
};
