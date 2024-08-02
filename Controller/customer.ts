import { Customer } from "../database/entity/Customer"

  

const createCustomer = async (payload: Customer, customerId: number) => {


    const newCustomer = await Customer.create(payload).save()

    return Customer
}
const removeCustomer = async () =>{}

const editCustomer = async () =>{}

const getCustomer = async () =>{}

const getAllCustomers = async () =>{}

export { createCustomer,removeCustomer,editCustomer,getCustomer,getAllCustomers,}
