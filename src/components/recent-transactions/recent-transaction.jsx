import React from 'react';
import './recent-transactions.css';

function RecentTransactions (){
   
          return(
            <div className="recent-transactions">
            <h3>Recent Transactions</h3>
            <table class="table recent-transactions">
            <thead>
              <tr>
                <th scope="col">All</th>
                <th scope="col">Received</th>
                <th scope="col">Sent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
          </div>
          )
      } ; 


export default RecentTransactions;