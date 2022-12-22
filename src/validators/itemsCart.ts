import { body, param } from 'express-validator';


export const itemsCartValidations = [


  body('productId').notEmpty().withMessage('productId is required!')
    .isInt({
      min: 0,
    })
    .withMessage('productId is not a number!!'),
	body('qty').notEmpty().withMessage('qty is required!')
      .isInt({
        min: 0,
      })
      .withMessage('qty is not a number!'),
];

export const itemsCartIdValidation = [
  body('id').notEmpty().withMessage('id is required!')
	.isInt({
		min: 0,
	})
	.withMessage('id is not a number!!'),
];

export const edititemsCartValidations = [...itemsCartIdValidation, ...itemsCartValidations];