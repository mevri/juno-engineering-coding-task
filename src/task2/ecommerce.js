////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

const fetchAllOrders = async () => {
    const ids = allIds;
    return await Promise.all(ids.map(id => fetchOrderById(id)))
    // .....
    //   1. TODO: fetch all ids using the "fetchOrderById" and the given ids, make it work as efficient and clean as possible.
};

const bucketOrdersByUsers = async () => {
    //   2. TODO: using the function from section 1 you should now bucket the orders by user.
    // each key in the object (ordersByUsers) represents a userId and each value is an array of the orders of that user.
    let ordersByUsers = {};
    const res = await fetchAllOrders()
    res.forEach(order => {
        const { userId } = order;
        if (ordersByUsers[userId]) {
            ordersByUsers[userId].push(order)
        } else {
            ordersByUsers[userId] = [order]
        }
    })
    return ordersByUsers;
};

const  substractWeeks = (numOfWeeks, date = new Date()) => {
    date.setDate(date.getDate() - numOfWeeks * 7);
    return date.getTime();
  }

const getLast2WeeksOrders = async () => {
    //   3. TODO: fetch all Ids and return array with only the last 2 weeks orders. make it work as efficient and clean as possible.
    const orders = await fetchAllOrders();
    const tmstmpToCompare = substractWeeks(2, new Date());
    return orders.filter(order => order.timestamp >= tmstmpToCompare)
};

const bucketOrdersByDate = async () => {
    //   4. TODO: using the function from section 3 bucket the orders by date.
    // each key in the object (ordersByDate) represents a day and each value is an array of the orders in that date.
    let ordersByDate = {};
    const res = await getLast2WeeksOrders();
    res.forEach(order => {
        const { timestamp } = order;
        const date = new Date(timestamp);
        let formated = date.toLocaleDateString("en-US");
        if (ordersByDate[formated]) {
            ordersByDate[formated].push(order)
        } else {
            ordersByDate[formated] = [order]
        }
    })
    return ordersByDate;
};

fetchAllOrders();
// .then(console.log);

bucketOrdersByUsers();
// .then(console.log);

getLast2WeeksOrders();
// .then(console.log);

bucketOrdersByDate();
// .then(console.log);

////////////////////////////////////////
