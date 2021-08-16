import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from './product';
import { ProductsService } from './product.service';

@Crud({
    model: {
        type: Product,
    },
})

@Controller('products')
export class ProductsController {
    constructor(public service: ProductsService) {}
}
