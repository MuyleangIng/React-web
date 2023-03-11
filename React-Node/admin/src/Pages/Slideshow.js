import React from "react";
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Slideshow = () => {

    return(
        <div>
            <Sidebar/>
            <div class="content">
            <Header/>
            <div class="container-fluid" style={{margin: "20px"}}>
                <div class="row column_title">
                    <div class="col-md-12">
                        <div class="page_title">
                            <h2>Slideshow</h2>
                        </div>
                    </div>
                </div><br/>
                <a href="#" class="btn btn-primary">Add new slideshow</a><br/><br/>
                <table class="table">
                    <tr>
                        <th>No</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Text</th>
                        <th>Link</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src="img/testimonial-1.jpg" style={{width: "70px"}}/></td>
                        <td>sgsdsgv</td>
                        <td>sgshshdshsg</td>
                        <td>sghjklikjfhjdghsfgadf</td>
                        <td>shdjfkghjfghfg</td>
                        <td>
                        <a href="index.php?p=slideshow&action=<?=$row['enable']?>&ssid=<?=$row['ssid']?>"><i class="fa fa-eye "></i></a>
                            <a href="/"></a>
                            <a href="/?p=slideshow&action=2&ssorder=<?=$row['ssorder']?>&ssid=<?=$row['ssid']?>"><i class="fa fa-arrow-circle-up green_color"></i></a>
                            <a href="/?p=slideshow&action=3&ssorder=<?=$row['ssorder']?>&ssid=<?=$row['ssid']?>"><i class="fa fa-arrow-circle-down green_color"></i></a>
                            <a href="#"><i class="fa fa-edit blue_color"></i></a>
                            <a href="#"><i class="fa fa-trash red_color"></i></a>
                        </td>
                    </tr>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-center">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Slideshow;