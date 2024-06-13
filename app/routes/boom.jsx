import {redirect} from '@shopify/remix-oxygen';

export async function loader({context}) {
    const {cart} = context;
    const headers = await cart.setCartId('INVALID')
    return redirect('/', {headers});
}