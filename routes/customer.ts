import { Router ,Request,Response,NextFunction} from 'express';
import { createCustomer,removeCustomer ,editCustomer,getCustomer,getAllCustomers,} from '../Controller/customer';
import { Customer } from '../database/entity/Customer';
import { AppError } from '../Errors/Error';

const router = Router();

router.post('/', async (req:Request, res:Response, next:NextFunction) => {
  const { name, mobilePhone, balance } = req.body;
  try {
    const newCustomer = createCustomer();
    const customer = newCustomer.create({ name, mobilePhone, balance });
    await newCustomer.save(customer);
    res.status(201).json(customer);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params;
    try {
      const deleteCustomer = removeCustomer();
      const customer = await deleteCustomer.findOne(Number :id);
      if (!customer) {
        throw new AppError('Customer not found', 404);
      }
      await deleteCustomer.remove(customer);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  });
  

  router.put('/:id', async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params;
    const { name, mobilePhone, balance } = req.body;
    try {
      const customerRepository = editCustomer();
      const customer = await customerRepository.findOne(Number:id);
      if (!customer) {
        throw new AppError('Customer not found', 404);
      }
      customer.name = name;
      customer.mobilePhone = mobilePhone;
      customer.balance = balance;
      await customerRepository.save(customer);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  });
  

  router.get('/:id', async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params;
    try {
      const customerRepository = getCustomer();
      const customer = await customerRepository.findOne(Number : id);
      if (!customer) {
        throw new AppError('Customer not found', 404);
      }
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  });
  

router.get('/', async (req:Request, res:Response, next:NextFunction) => {
  try {
    const customerRepository = getAllCustomers();
    const customers = await customerRepository.find();
    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
});

export default router;
