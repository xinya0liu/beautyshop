
import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder : builder.mutation({
            query : (order) => ({
                url : ORDERS_URL,
                method : 'POST',
                body : {...order}
            }),
        }),
        getMyOrders : builder.query({
            query : () => ({
                url : `${ORDERS_URL}/mine`
            }),
            keepUnusedDataFor : 5
        }),
        getOrderDetails : builder.query({
            query : (orderId) => ({
                url : `${ORDERS_URL}/${orderId}`
            }),
            keepUnusedDataFor : 5
        }),
        payOrder : builder.mutation({
            query : (order) => ({
                url : `${ORDERS_URL}/${order.orderId}/pay`,
                method : 'PUT',
                body : {...order}
            }),
        }),
        deliverOrder : builder.mutation({
            query : (order) => ({
                url : `${ORDERS_URL}/${order._id}/deliver`,
                method : 'PUT',
                body : {...order}
            }),
})
    })
    });
    export const {
        useCreateOrderMutation,
        useGetMyOrdersQuery,
        useGetOrderDetailsQuery,
        usePayOrderMutation,
        useDeliverOrderMutation
    } = ordersApiSlice;
