<template>
  <div class="preview-page">
    <div class="bg"><img src="../assets/circles.svg" alt=""></div>
    <div class="preview-wrapper">
      <div class="preview-wrapper-items">
        <img src="../assets/logo1.png" alt="">
      </div>

      <div class="preview-wrapper-items">
        <div class="appreciation">
          <div class="done">
            <img src="../assets/reg.svg" alt="">
          </div>
          <div class="text">
            Thank you for registering
          </div>
        </div>

      </div>

      <div class="card-wrapper">
        <div class="card">
          <div class="name">name</div>
          <div class="company">Company</div>
          <div class="role">Role</div>
          <figure class="company-logo"><img src="../assets/logo-small.png" alt=""></figure>
        </div>
      </div>

      <div class="buttons">

        <div class="confirm-wrapper"><button class="confirm-wrapper">Register</button></div>

        <div class="confirm-wrapper"><button class="confirm-wrapper">Print</button></div>

        <div class="confirm-wrapper"><button class="confirm-wrapper">Overview</button></div>        
      </div>


      <div id="display-preview">
        <div class="output">
          <div class="text-wrapper">
            <div class="title">Name :</div>
            <div class="display"></div>
          </div>

          <div class="text-wrapper">
            <div class="title">Email :</div>
            <div class="display"></div>
          </div>
        </div>

         <div class="output">
          <div class="text-wrapper">
            <div class="title">Gender :</div>
            <div class="display"></div>
          </div>

          <div class="text-wrapper">
            <div class="title">Phone :</div>
            <div class="display"></div>
          </div>
        </div>

        <div class="text-wrapper  one">
            <div class="title">Organization/Company/Institution :</div>
            <div class="display org"></div>
          </div>

          
         <div class="output">
          <div class="text-wrapper">
            <div class="title">Profession :</div>
            <div class="display"></div>
          </div>

          <div class="text-wrapper">
            <div class="title">Specialization :</div>
            <div class="display"></div>
          </div>
        </div>

        <div class="text-wrapper  one">
            <div class="title">Address :</div>
            <div class="display"></div>
          </div>

             
         <div class="output">
          <div class="text-wrapper">
            <div class="title">Country :</div>
            <div class="display"></div>
          </div>

          <div class="text-wrapper">
            <div class="title">Region :</div>
            <div class="display"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media  screen and (min-width: 1024px) {


#app{
  height: 100vh;
  background: url(../assets/circles.svg);
  background-repeat: no-repeat;
  background-position: bottom right;
  width: 100%;
}

.preview-page{
  position:relative;
  /* overflow-y: hidden; */
}
.bg{
  position: absolute;
  bottom: -168px;
  right: -80px;
  z-index: 0;
}
  .preview-wrapper{
    padding-top: 32px;
  }
  .preview-wrapper-items{
    display: flex;
    justify-content: center;
  }
  .text{
    font-size: 36px;
  line-height: 42px;

  color: #ED7F20;
  }
  .appreciation{
    display: flex;
    /* height: 100px; */
    gap: 24px;
    align-items: center;
    margin-top: 96px;
  }
  .card-wrapper{
    border: 4px solid #ED7F20;
    box-sizing: border-box;
    border-radius: 32px;
    height: 216px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card{
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 26px;
    width: 291px;
    height: 156px;
    padding: 32px 32px;
    
  }
  .card div{
    margin-bottom: 5px;
  }
  .company-logo{
   display: flex;
   justify-content: right;
    
  }
  .buttons{
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
  }

  .confirm-wrapper{
    background: #5F8EEA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 146px;
    height: 60px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    border: none;
  }
  #display-preview{
    padding: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    margin-top: 64px;
    background-color: white;
    z-index: 10;
    position: relative;
    /* overflow-y: hidden; */
  }
  .display{
    width: 200px;
    height: 32px;
    /* border: 1px solid black; */
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  .text-wrapper{
    display: flex;
    gap: 32px;
    /* height: 50px; */
    align-items: center;
  }
  .title{
    font-size: 24px;
    line-height: 28px;
    text-transform: capitalize;
  }
  .output{
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  .one{
    margin-bottom: 32px;
  }
  .org{
    width: 390px;
  }
}

</style>
