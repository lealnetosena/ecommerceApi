import { body, param } from 'express-validator';

export const productValidations = [
	
  body('name').notEmpty().withMessage('name is required!'),
  body('description').notEmpty().withMessage('description is required!'),
  body('flagActive')
    .notEmpty()
    .withMessage('flagActive is required')
    .isBoolean()
    .withMessage('flagActive is invalid! true or false'),
	body('brandId').notEmpty().withMessage('brandId is required!')
    .isInt({
      min: 0,
    })
    .withMessage('brandId is not a number!!'),
  body('categoryId').notEmpty().withMessage('categoryId is required!')
    .isInt({
      min: 0,
    })
    .withMessage('categoryId is not a number!!'),
	body('priceUnit').notEmpty().withMessage('priceUnit is required!')
      .isInt({
        min: 0,
      })
      .withMessage('priceUnit is not a number!'),
];

export const productIdValidation = [
  body('id').notEmpty().withMessage('id is required!')
	.isInt({
		min: 0,
	})
	.withMessage('id is not a number!!'),
];

export const editproductValidations = [...productIdValidation, ...productValidations];