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
                        <td>Aaa</td>
                        <td><img src="img/testimonial-1.jpg" style={{width: "70px"}}/></td>
                        <td>A11111</td>
                        <td>a1a1a1a1</td>
                        <td>1AA1a1a1a1a1a1aa11a1aAAAAA</td>
                        <td>#</td>
                        <td>
                            <Link to="/"><i class="fa fa-eye "></i></Link>
                            <Link to="/"><i class="fa fa-arrow-circle-up green_color "></i></Link>
                            <Link to="/"><i class="fa fa-arrow-circle-down green_color "></i></Link>
                            <Link to="/"><i class="fa fa-edit blue_color "></i></Link>
                            <Link to="/"><i class="fa fa-trash red_color "></i></Link>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>Czfmlkdm</td>
                        <td><img src="img/testimonial-2.jpg" style={{width: "70px"}}/></td>
                        <td>ao;ljkfsfsad;aojj</td>
                        <td>uhgskfl;sjg;ld</td>
                        <td>klsghst98rioeitrepoifke0ut</td>
                        <td>#</td>
                        <td>
                            <Link to="/"><i class="fa fa-eye "></i></Link>
                            <Link to="/"><i class="fa fa-arrow-circle-up green_color "></i></Link>
                            <Link to="/"><i class="fa fa-arrow-circle-down green_color "></i></Link>
                            <Link to="/"><i class="fa fa-edit blue_color "></i></Link>
                            <Link to="/"><i class="fa fa-trash red_color "></i></Link>
                            
                        </td>
                    </tr>
                    <tr>
                        <td>Bbbb</td>
                        <td><img src="img/testimonial-1.jpg" style={{width: "70px"}}/></td>
                        <td>222BBBBB</td>
                        <td>bbabababb2222</td>
                        <td>BBBdjd@@@@@2222</td>
                        <td>#</td>
                        <td>
                            <Link to="/"><i class="fa fa-eye "></i></Link>
                            <Link to="/"><i class="fa fa-arrow-circle-up green_color "></i></Link>
                            <Link to="/"><i class="fa fa-arrow-circle-down green_color "></i></Link>
                            <Link to="/"><i class="fa fa-edit blue_color "></i></Link>
                            <Link to="/"><i class="fa fa-trash red_color "></i></Link>
                            
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