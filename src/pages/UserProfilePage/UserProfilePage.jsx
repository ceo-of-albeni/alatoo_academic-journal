import React, { useState } from "react";
import "./UserProfilePage.scss";
import PaymentModal from "./UserPageModals/PaymentModal";
import SuccessModal from "./UserPageModals/SuccessModal";
import DataTable from "../../components/Table/Table";
import BasicDatePicker from "../../components/DatePicker/DatePicker";
import BasicTextFields from "../../components/Search/Search";
import MultipleSelectPlaceholder from "../../components/StatusDrop/Status";
import Category from "../../components/Category/Category";
import PaginationControlled from "../../components/Pagination/PaginationTable";

const UserProfilePage = () => {
  const [openArticle, setOpenArticle] = useState(true)
  const [openPayment, setOpenPayment] = useState(false)
  const [openSuccess, setOpenSuccess] = useState(false);

  const closeOpenPayment = () => {
    setOpenArticle(false);
    setOpenPayment(true);
  }

  const closeOpenSuccess = () => {
    setOpenPayment(false);
    setOpenSuccess(true);
  }

  return (
    <div className="mainest">
      <div className="main_div">
        <div className="profile_card">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWFRgSFRIYGBIYGhISFRUSEhESGBkYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8PGBESGDQdGB0xNDE0MTE0MTE0NDQxMTQ/Pz80PzExPzE0Pz80PzQ/NDExNDExMTE0NDExNDExMTExMf/AABEIAN8A4gMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xAA9EAACAQIEBAQDBQcDBAMAAAABAgADEQQFEiEGMUFRImFxkROBoQcUMkKxI1JicsHR4TSCopKy8PEVFjP/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEBAQACAwEAAAAAAAAAAAABEQIhMQMSQTL/2gAMAwEAAhEDEQA/AJ4gg7covYwxSGUTN1ioSOcHDNqQfws6EehuPoYZlgYZhdl7hX/of0Erj2VozsQLhSf5d533olB+zf5gRVYlVqWFtRHkFvNmdpNsVYbow5cwIVsco5g/SAuo2OskG9hoF4U25a+22hYFofviEEje3Pl/eIPmKgA6W39P7xRyguAQCbE3p/8Al5C47MWXa6+R0qIEk1zFCLgG/bb+8D/5AW/C1/lKi2PAN78+0OMebXB8iCYGlcRxGASvwzb1jVc/X9w+8iGIMKKYG8Ep2nmrObKF+sM+Iq2/CL/IfqZWBjgDty7Q1TF2Gomw7dTA1kWuSp11AvoVPzjBMdTd1ppUZudyCennK7XxLPt+FOw/rJjh2gy3qFCdQsu3SLT1N1FCoQL9eZvM44le9Qek0PFv4CbW9ZmmduTWbsLCKgxAj/K8sqV20oNhuzHkIxEsPBzkViL+ErY+vSSnmbU7lvDdKmQzeNx3/CPQSbVIoEhtMw67vp08/HzCemAYciFtIakzOh7QCIAWdBtOgS4kQdJiiiHU95sxN4i2zof3taH2uP0MdVEjTF7KH/cZH+V7H6EyuU06PK0IlIb7t/1GKsJyiaxFRmLraCBc2P8AEYXMcGKqBwxVreF0azehtzkk1MHmoPqAYQCykG1hciwtGIomZLjaYIFQsv1ldxmMqH8ZNx3l3zjNKa7cz9JVsViqFQHUulhysecm0IqnULCOqLndTzAB+UaK6jlyj/LHQvdhzGmBOWoF29PrBqVyVNpJ51k9leoo2C02AHsZA0kfTyuIaeEGqBAWPTkPOEwdRXYsx9LnaDi0JFiu3OIUKQJtohoxJu6khbjcgbW7y7U1soA5WEzIOEqLddgQbek0jC4lXRXHIgQEIZq9kmY457u58zNIzpvCPnMyq7sx8z+sVFEBli4UTxO3oAZXgJaOGF/Zk92P0k9ej4/pc8NUuPOLyOy+pvYyStOfr26xSImwipEKwiBKAYJnEQDp0C0GAXEGCWhbTipmznB8QwjoGVk7qfTeFzLFClTapa+kbDuTsB7xLAVL0aDsw+LUa7AHpuSLeQErkHOFqakU9SBf2iwjXCra69nqL8idQ/WODNJUBiOK/A3oYcmNMycim5HOxtKDNMbimV2p7EXIBI3kXiabX5e0VxpLOT1vH2WprIUj1MkkUlB+0l8qyyozg8gN5aaeX07ch5ySwyU1TYC8mqkA6A0yhH5dJ9JFDLaaJcC6m31kvXawBtcNcH5yMw1Qujr2YW+UnWk5RiYBXJsNgbRDG5Vosyiw6yTwOKWnVYHZWve/TaI5jjqIQlqi9dgYaVkVXE5cHe4Nj9JZOHjanoJ3UkSqVMx8RK8oFHMqlNg6nnzB5GOVms/Eb2Q+jfpM5AlxzLN0rUmts4U3U/0lR0xlost2QU7UV87n6ypkS65clqaDyEnq+Fcf0fU3sbyHzDiKsKwp6tCXAJUb+5kuola4nwhv8QDteZc+fbbq4t2CxVS9mbUDaxI3/wAyQ1St8J4r4tIIRZ6ZC6rbFegJ7yylQOsnqZVc3YIRB094Vn7RNjfnEor4Z0RnRheFM4LASw/xD3mrnomJwiVENNuTW5c++0Qw+VUkfWq+IAgXJIF+dh0jxWh4BH1NnbsQj+x0n9RF2hccB4T31L7qbfUCERrqG7gTWUsGIkLxDm9KggDm5fwBRz36+kmKlVUUuxsoBJPkJi/E2bnE12qfkHhQeQjRalsbTUnwjaKZc4TvfyjbLa/xE2/EPxD+sXq6k3AgUqRqZ8yLo+HctfrZtoyy3iNWYU2upLbdRvI+qS299+hktlWGdvEKaF+QdUGof5isVKvDUSUHyMrlZzSVyOpNpO5KtRMOadQksCbatzYyJzLCOw2F+Z2kVrKomc4x7gX3be8bZfltR/ysUHidyCAB69ZoGTZNQf8AaVEBK+CzDv1ivEuGSlSNOidn6bbQiazlKQaoVXleLZpSCBR13kthsGlJS5O/MkyBx+K1uW6ch6Sojq5DdTE2SHkvk2TvXuVICjYkwrOIRaZJAA3l1w6WUDsB+klMHw3SQctTd26ekbVKBVivYyOr4bcTyJCvTVgVYXB5gxQrCzGN+okMHSpqgCIqjsotFiIzwT7kdI9MKchPTOCwxnRGDTOnXnRhcgIN4BM681c46RYRBIoHgCWNQstha91O/kQYxDVR4RTGnezM9ue/K0k2MYZrjlo0nqsdlBsO56ASuaVU7j7O2RBhlsHcXfSb2Xt85m5WO8fjXqu1VzdmJPoOgjUzSMer5KYXFPTfWh9R0Il6yWphMWAhqfCrdUa1m/lMz5hORiDcGxG4I2jwta0vBaMbfEMt3D+QphksPE53uRM24R40qahQr+IWsr8mFuh7zUsBndB1H7RdXKxNjDFc0xzLDtq1W25GMa6gCWarXpkbsLeomecV0nNT9hVJU8xfZfnJ6jTmk6GaqjOncn3EY16+slmO/wCURpSyx9VtV3POPq+JwmDGuqddW3hQbmTgtVriZKiql9le5A5Gw6mQEkc/4ibFMhZAmjUFAN9j385GiXIz6uhk3wnnIoVNLj9m9lPl5yDMKBCplbgiggEbg7iQuc4azB++0Q4KzHXhgrMS6Eqbm5t0kxmFPWh7jcTLqOji/qssIkYq7RrVewmLanNPlJGk9wD7yuJj97RwuY6Dz25GPBqdtAtIlM5W+4jlcwpnrDD07tOiH3tO86LBsXsJDqggdYZXmrALRKobQ1VhEyLwAVeZdxxnL1KzUQf2aGwA6nqTNKxLhEZzyUFvYTD8dX1u7/vMze5lczUd3IbutoSKMYkTNmFdAtOvBvGBqFQowccwbySzfNnZkem5W6i4HRr7yLMdY3BlaVKofz6jA5TjDcUYpOb6h2JMlP8A7QhS5ptrPOzC0qoEVo0Xc6UUs3ZReTVSpteLKqI6oihm/OblhK3iK7uxd2LMdySbyTxGR4lV1mmbc7dfaRDCLBo6HeOkMVxOV1KdGnXYeGoTa3QDvGqNAizGFDQpeFERLLwbmBTEKl/C/gPr0mn1E2MxTBVSjq45qQw+U0KlxK3Uc5HUa8dfhPMl0OVP8w7WMr+KxBJkvm2brUUi1jbaVpql5nY3vQ3xex5RQuSpPnImlU0uynkTcR8rx4X2GuYZCb84RNyBLFgMrBGoxCVD6X850tf3NJ0FL/t0iZgq0MQDKZm14oixTQIKiARfEDlcNVP8D/pMRYTbeJf9NV/kaYm81+Nl8n4JE3hzCsJoyFhoWCBEYGl6zzKCcFS0jdER7eo3lI0zdMLgFekikX8CD/iIwxDB4V6jfDpoXc8gouf8TWeC+FVwya3Aas/4ja4UfuiWPJ+HqFAeCmFJ3JHM+pk2lIcgI8OREvgqbWug25bSt53wJhK7F9JpuebU9gfUcpaKWcUGrPh0fVUp21qByvJcUAd4WKxQ8y4TV8N91t4VUBG7MBsZi2Jw703am62dCVYHynqv4II3ExX7XMganVXFIvgYaXI732JkWFYpmSZW2JqfCRlVrE3cgDbuZM47gqvTTUXV3ufBTBbYdbxhwZXopi6fx7fDJsb8r/lv5Xm/hlK+G2m3MWtaJLzSNvUbSbweI1IL8xtHHG1FPvL1KdMilcLrC2Qv1seUiMDVsSO8nr0vn2f12veNCY4cxrUMza6a43o3WOqVTULxvXXULRLBvYlYySCvY3l2yeoHpgiUaSmEzZ6FMsqgm9rGTWkXXTAlVTiOqQDZNwDzM6LD1rLDtOQ7QVaAp3lICWtO+L5TmWcBAGebrqoVR3R/0mHON5vtRAVZTyIIPzEwnHppqOvZmH1mvxsfkNDCtDNCmaMxBFFETiqGIQZOY9R+s9GYCiPhoRy0J/2iecmnorIamrDUW706Z/4iVFw/WnaKUu0KsVpDeMzanlVFHeqtNRUfZ3A3Ij6mNooVnBZOqCsiuJsrTE4apRYXLKQp7N0+sllEFhtJqa8kYmiyO1NtmRmRvUG00HgWpUIFNccArqwamx1MpsQNNzIz7UsrFHHOyiy1VFS3nyaQnDVRaddKzuERDdv3j5KIkrDn2Np6zgkbWoZVd+S+AfhQdN7kmRdXLUTxqT2tC5hTpjGMaTh6bt8RSpvbVuR6iSWJXwEyevR8zyijG9VesMWnEzNqbExvUBVg3SOGG87RcWMAVU7Xj2nR102HzEZIJK5VyIhq4r/3M+c6Wj7gvf6QYaeNcVIZV3h2a05TKsSArvB0CGnQwCETFeLMKaeKqLawLax5ht5tTzNftOwZWpTrX2ZTTI813l8s+/SimFMOTCmWxJkSb4Mwq1cWlNio2dhr5XA2kMEJ5KT6AmOMChXVU3GgbcwdR2Aga0faDgKdOshQrqdNTqtrBgbX+c0vgDE68BRPVVNM/wC02mENUZjdmLHuxJM1r7KMeDhnpdUcn5MAf7xw40RBFUG8SpNcRZRKqi4nWjXHvUFNzSANQKdAbYFul5EZDjMYUDYqmqVbkFUYEW6GZmsMBjtIjGZ2iNpP6SPxPEKlSFP0MAzX7YV1OlQdC1Mny5iZuDNL+0F9eH1HnrQ++0zURVNSGT2+KpOwFyfaTuYYtNOlSDftK5hb3vHgkVXLjOMCdIWSdYCxRhCwA4kllbc5GrH+X84q1iWvOhbTpJtXYw6wl4Iea6xHZoAaE13hgIaBXcC5JsBuZmnG2MOJ/CD8NPwXHXqZduJcxFGiWtdj4VHmeszepiGO5NyecJU9K2vaalwpwXQKLUqoHcgMdW4F99hMtxNPSxE2j7O8ZrwaajdlLIfkdvpNZfDPEhWyyig0rTUeiqJmXHFII6qoAD3JsOduU0/OMRpF5mnHrkik9urLf5XgeKhaXX7LsXoxLUydnQ29VN5SQ0kcixxo4inVH5XW/odj+scS9DJWtFfvkhUxAIBvzsYoKspcSj4m/KMXqwgqRuzXjwzLNWVtxzEiXNpO4xAVvbeQtdQOZAHPeKwKtxw4+7H+ZP1mcICTaW7jLNA6/DUeEOLnvaQuU4X85/2/3mdLCy4fSoA+cAR3XNhGizPqrkDOAhgsMqyTJlIm6xyREqqG0QESSGATxRlh6dzaTWFo6RCtYcToa06QbUrTrTlO+3KGmrEVVh2MFYDR4FJ+0HFEBEB2O/neUha0meM8SXxLAnZfCAOg/vIFe8IVI5kAbW59ZO8D8THCuab/AP5OQT/Ce4kHUQkFvMSUfJGfDLiUBLL+Ne4HUS5UY0PHZphKg+IMQum17ahf25zNuKc4Sswpob00v4u7HrIkJoZj00tY+sbLHpWhWKU+Y9R+sTJh0exB7EGOJbDhcW2lR5Ab+kfU6tQ9NvKRWGCPh1qg7kAgf0jqmxC3DG3cGP7SL5iSptU/9iR+Gq4vW3xKaqoJ0lX1ah6dDGq46spID3HZheI4rPKi7Mq+0f3isTOYY9VUXPqJSM9zZjtey7iwiWYZxdiCd5A43EatryOvkn4eGOJTWRfle5hw5Gw5QZ1pl9qMF1E84dBOVYqiRG4LBCxULOAgeCokVFO8PTQk2AuTLLlGR/mcb9oDERhcqOg1DtbexigSWzFYXwEKN7StlJNackrTorpnSFtHRrRS8SC2MUdxymrnrleIZjiglN6hNtKk/OHWUv7Qs9KKMMhF2F3PYdpUCpuS7M5O5JJ+ZhHpc4ww2LZY7TE6gTKidErmwAHWaRwphtOHUHkd5m2AptUqKg3uQJreBpBEVB0EVGIDOuGKbguqWPMgSq4vh1V5X5XtczVSm28Z1MqR225mLReZWQPljedoqmSVG5EfO80XFZJp2KyNr4bRbtK+1H0hPJHdaIpPzW9vSP6OYqg0tysR8pE18SE3vvIPH44sSD6RXpUmLLi8zRDqVr+Ug8dnGu9x6WkLrPc+8KItA9R7m8JaHCwwSTQStB0xQpDBIAmoiqRWnRJ6fSP8Nk1Rzspt3goyCxzhsC7kWBlhwPDwG79OYkwmHRNlERmeT5MiAM27SdVI3ojcR+sYIGnfY9ZWMyw+hyBy5iW5hIfPMPdNQG4P0k2Kiu2nRTTOk4poDQmi8Fm3h1mrAnVcIjOeSgt7TEM6xxrVXqHqxt126TYuI62nDVT10Nb2mHQhVytHKN4Y203jmihO0tKx8FYfVWBPTeaYolS4JwICGpbe+kGW4CRauDs0NQfxCJkTreUIeJfE4cOlpT+I8vKJ8ToLmWLD4rQDquZXszfGYlXpimqU76QznxFe9pRs5JeoSQCVubQj4Op1UzTMFktOmipsbDckDc9YGKy+meg9pNSzJcK3Y+xii4GoeSH2mk0sHTH5R7CHNBegHsIjxnVPKqp/IfaOqeQ1D0t6y/rTEIyeUDUVMkctpPvJTDcOAHxG8sSUt72iwESTCnlFMC1o7pUggssdIkK6bQUSYNblz3ESVT845ueR6bCFI3gBaax8hjPcG4ioeMF3MQrIGBU8iLQC5hxy3iOVXGy978p0n9p0k9SQpw4B7QwMNrM1xl5MsfgxVRqbqSjCxEpeL+z1dV0qMF7ab2mgCqYDVj0P0i8FlZbnHCT0gppo73ve1Njb2EjaGT4m/wDp6nzpv/abCMU/ce0OuKqHqPYQGVFZFgGp0UUqQ1rna256R29Nuxjt67+UTNdu/wBIeDmm6o3Y+xgrq/dPsYr94fuPaAMQ3f6R5D8gqA25Ru5jw1iRGtQRapyjaJOIpTPSFYAXiEhG0ECHKQqwMdE9ok8VLbRKpqvz2gTkWA4HzhWYxRVUiADTa4gsIWntDg3gALGzOdXlHRibAdoAQmJ6j6Q9RbC4iLvt53gB1veL64yVzOFSAOridG+qdFgf/9k="
            alt=""
          />
          <div className="profile_main-info">
            <p>
              <strong>First Name: </strong> Aliia
            </p>
            <p>
              <strong>Last Name: </strong> Malaeva
            </p>
            <p>
              <strong>Position: </strong> Author
            </p>
            <p>
              <strong>Email: </strong> aliia.malaeva@alatoo.edu.kg
            </p>
          </div>
          <p className="edit_prof">Edit Profile</p>
        </div>

        {openArticle && (<div className="article_form" id="article_div">
          <h4>ARTICLE</h4>
          <div className="article_form-inputs">
            <div className="short_inp">
              <p className="input_p">Article title*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              />
              <p className="input_p">Category*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              />
              <p className="input_p">Full name of each author of the article*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              />
              <p className="input_p">Email of each author of the article*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              />
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              />
              <p className="input_p">Article file*</p>
              <label className="custom-file-upload">
                <input type="file" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512">
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
                </svg>
              </label>

              <p className="input_p">Phone*</p>
              <input
                className="text_input"
                placeholder="Click and start typing"
                type="text"
              />
            </div>

            <br />
            <button onClick={closeOpenPayment}>Next</button>
            <p id="clear_all">Clear all</p>
            <div>
              <input type="checkbox" /> By submitting this form, you agree to
              Privacy Policy
            </div>
          </div>
        </div>)}
        {openPayment && (<div className="article_form">
          <h4>Payment</h4>
          <h5>Hero Trio Annual plan: $150 charged every 12 months</h5>
          <div className="article_form-inputs">
            <div className="short_inp">
              {/* <p className="input_p">First name*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  />
                  <p className="input_p">Last name*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  /> */}
              {/* <p className="input_p">Country*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  /> */}
              {/* <p className="input_p">Zip code*</p>
                  <input
                    className="text_input"
                    placeholder="Click and start typing"
                    type="text"
                  /> */}
            </div>
            <div className="card_inp">
              <p className="input_p">Credit card details*</p>
              <input
                // className="text_input"
                id="card_input"
                placeholder="Card number  MM    YYYY   CVV"
                type="text"
              />
            </div>
            <br />
            <button onClick={closeOpenSuccess}>Get instant access now</button>
            <p id="clear_all">Clear all</p>
            <div>
              <input type="checkbox" /> By submitting this form, you agree to
              Privacy Policy
            </div>
          </div>
        </div>)}
        {openSuccess && <SuccessModal closeModal={setOpenSuccess}/>}
        
      </div>

      <div className="filtration">
        <BasicDatePicker />
        <BasicTextFields />
        <MultipleSelectPlaceholder />
        <Category />
      </div>
      <DataTable />
      <PaginationControlled />
    </div>
  );
};

export default UserProfilePage;
