import React from 'react';
import './VerticalNav.css'

const RestaurantVerticalNav = () => {
    return (
        <div className='row'>
            <div className='d-flex justify-content-between'>
                <div className="col-md-3">
                    <div id="list-example" class="list-group">
                        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                    </div>
                </div>

                <div className="col-md-9">
                    <div style={{ overflowY: 'auto', }} data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                        <h4 id="list-item-1">Item 1</h4>
                        <p>... Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil ipsam reprehenderit quo iure explicabo. Soluta, quod earum delectus quisquam, voluptatibus doloremque sit dolore expedita sapiente unde voluptates praesentium! Facere, iure! Blanditiis facere corporis ut amet veniam? Quam repellat aperiam, sint omnis amet quia cupiditate minus eligendi repellendus vitae quasi facilis dignissimos in dolorem qui debitis ut eos laborum explicabo veniam cumque delectus natus, nulla maxime. Illo tenetur ab totam maxime dolor vitae earum mollitia rerum incidunt a architecto eaque nisi debitis temporibus, pariatur ea iusto. Corporis, minus voluptas molestiae hic quod porro quae voluptate vitae ipsa eveniet commodi delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vero.</p>
                        <h4 id="list-item-2">Item 2</h4>
                        <p>... Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil ipsam reprehenderit quo iure explicabo. Soluta, quod earum delectus quisquam, voluptatibus doloremque sit dolore expedita sapiente unde voluptates praesentium! Facere, iure! Blanditiis facere corporis ut amet veniam? Quam repellat aperiam, sint omnis amet quia cupiditate minus eligendi repellendus vitae quasi facilis dignissimos in dolorem qui debitis ut eos laborum explicabo veniam cumque delectus natus, nulla maxime. Illo tenetur ab totam maxime dolor vitae earum mollitia rerum incidunt a architecto eaque nisi debitis temporibus, pariatur ea iusto. Corporis, minus voluptas molestiae hic quod porro quae voluptate vitae ipsa eveniet commodi delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vero.</p>
                        <h4 id="list-item-3">Item 3</h4>
                        <p>... Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil ipsam reprehenderit quo iure explicabo. Soluta, quod earum delectus quisquam, voluptatibus doloremque sit dolore expedita sapiente unde voluptates praesentium! Facere, iure! Blanditiis facere corporis ut amet veniam? Quam repellat aperiam, sint omnis amet quia cupiditate minus eligendi repellendus vitae quasi facilis dignissimos in dolorem qui debitis ut eos laborum explicabo veniam cumque delectus natus, nulla maxime. Illo tenetur ab totam maxime dolor vitae earum mollitia rerum incidunt a architecto eaque nisi debitis temporibus, pariatur ea iusto. Corporis, minus voluptas molestiae hic quod porro quae voluptate vitae ipsa eveniet commodi delectus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, vero.</p>
                        <h4 id="list-item-4">Item 4</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RestaurantVerticalNav;