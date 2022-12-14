import React from "react";
import CategoriesSidebar from "../categories-sidebar";
import NewsComponent from "../newsAPI";

const DetailsComponent=()=>{
    return(
        <>
            <div className="row">
                <div className="col-2">
                    <CategoriesSidebar/>
                </div>
                <div className="col-7">
                    <h5 className="wd-text">How to stay healthy?</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse. Lobortis mattis aliquam faucibus purus. Auctor eu augue ut lectus arcu bibendum. Facilisis magna etiam tempor orci eu lobortis. Vel orci porta non pulvinar neque. Purus in massa tempor nec feugiat nisl. Felis imperdiet proin fermentum leo vel orci porta non. Mi bibendum neque egestas congue. Quam pellentesque nec nam aliquam sem et tortor consequat id. Quisque non tellus orci ac auctor. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Curabitur vitae nunc sed velit dignissim sodales. Ac tortor dignissim convallis aenean. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Tincidunt id aliquet risus feugiat. Id ornare arcu odio ut sem. Iaculis eu non diam phasellus vestibulum lorem sed. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Vel risus commodo viverra maecenas accumsan. Tristique nulla aliquet enim tortor. Tortor id aliquet lectus proin. Massa sapien faucibus et molestie ac. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit. Commodo sed egestas egestas fringilla phasellus. </p>
                    <p>Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Cras ornare arcu dui vivamus arcu felis bibendum ut. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vitae auctor eu augue ut lectus. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Quam quisque id diam vel quam. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Nullam vehicula ipsum a arcu cursus vitae congue. Egestas sed tempus urna et pharetra pharetra. Enim nunc faucibus a pellentesque sit amet porttitor eget. Nisl tincidunt eget nullam non. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Lacinia at quis risus sed vulputate odio ut enim blandit. Duis at consectetur lorem donec massa sapien faucibus et molestie. Malesuada fames ac turpis egestas. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Ut lectus arcu bibendum at. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Id interdum velit laoreet id donec. Nunc lobortis mattis aliquam faucibus purus in massa. Lectus mauris ultrices eros in cursus turpis massa tincidunt.</p>
                </div>
                <div className="col-3">
                    <NewsComponent/>
                </div>
            </div>
        </>

    );
}
export default DetailsComponent;