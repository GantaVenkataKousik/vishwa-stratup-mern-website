import React, { useState } from 'react';
import './Tickets.css'
const Tickets = () => {

    return (
        <section className="tickets media" id="tickets">
            <h2>Tickets</h2>
            <div className='tickets-container'>            <div class="ticketContainer">
                <div class="ticket">
                    <div class="ticketTitle">Single Person</div>
                    <hr />
                        <div class="ticketDetail">
                            <div>Amount :&nbsp; 300</div>
                            <div>Food :&emsp; 200 </div>
                        </div>
                        <div class="ticketRip">
                            <div class="circleLeft"></div>
                            <div class="ripLine"></div>
                            <div class="circleRight"></div>
                        </div>
                        <div class="ticketSubDetail">
                            <div class="code">LO-2314XXX</div>
                            <div class="date"> March 15<sup>th</sup> 2024</div>
                        </div>
                </div>
                <div class="ticket">
                    <div class="ticketTitle">Group </div>
                    <hr />
                        <div class="ticketDetail">
                            <div>Amount :&nbsp; 1200</div>
                            <div>Food :&emsp; 800 </div>
                            <div>20% offf</div>
                        </div>
                        <div class="ticketRip">
                            <div class="circleLeft"></div>
                            <div class="ripLine"></div>
                            <div class="circleRight"></div>
                        </div>
                        <div class="ticketSubDetail">
                            <div class="code">LO-2314XXX</div>
                            <div class="date"> March 15<sup>th</sup> 2024</div>
                        </div>
                </div>
            </div></div>

        </section>
    );
};

export default Tickets;
