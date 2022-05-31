<template>
  <div class="container outer">
    <div class="header">
      <h1>Enter Your Details</h1>
    </div>

    <FormulateForm id="formulateform">
      <div class="nameelement1">
        <div class="name">
          <label for="name">Name </label>
        </div>
        <div class="iname">
          <FormulateInput type="text" name="name" placeholder=" Enter Name" validation="required" /><br />
        </div>
      </div>
      <div class="nameelement">
        <div>
          <label>Father Name</label>
        </div>
        <div class="fname">
          <FormulateInput type="text" name="father name" placeholder=" Enter Father Name" validation="required" /><br />
        </div>
      </div>
      <div class="nameelement">
        <div>
          <label>Mother Name</label>
        </div>
        <div class="mname">
          <FormulateInput type="text" name="mother name" placeholder=" Enter Mother Name" validation="required" /><br />
        </div>
      </div>
      <div class="nameelement">
        <div>
          <label>Email</label>
        </div>
        <div class="email">
          <FormulateInput type="email" placeholder=" Enter Email" validation="required|email" /><br />
        </div>
      </div>
      <div class="nameelement">
        <div>
          <label>DOB</label>
        </div>
        <div class="date">
          <FormulateInput type="date" validation="required"/><br>
        </div>
      </div>
      <div class="nameelement">
        <div><label>Select State</label></div>
        <div class="select">
          <FormulateInput :options="{
            first: 'MP',
            second: 'UP',
            third: 'Delhi',
            fourth: 'Noida',
          }" type="select" placeholder="Select an option" validation="required"/><br>
        </div>
      </div>
      <div class="nameelement">
        <div><label>UserName</label></div>
        <div class="uname">
          <FormulateInput type="text" placeholder="Enter UserName" validation="required"/><br>
        </div>
      </div>
      <div class="nameelement">
        <div><label>Password</label></div>
        <div class="pwd">
          <FormulateInput type="password" placeholder="Enter Password" validation="required"/>
        </div>
      </div>

      <div class="submit">
        <FormulateInput type="submit" />
      </div>

    </FormulateForm>
  </div>
</template>
<script>
export default {
  name: "HelloHome",
};
</script>

<style>
.outer {
  margin-left: 33%;
  margin-right: 33%;
  max-width: 400px;
  max-height: 500px;
  text-align: center;
  margin-top: 6%;
  border: 3px solid green;
  border-left: 1%;
  border-right: 2%;
  border-radius: 10px;
  position: fixed;
}

.header {
  color: green;
  font-family: "Times New Roman";
  text-align: center;
  border: 2px dotted lightblue;
  border-left: 10%;
  border-right: 10%;
  
}
#formulateform{
border: 2px dotted lightblue;
}

.nameelement1 {
  margin-top: 3px;
  display: flex;
  margin-left: 30px;
}

.nameelement {
  display: flex;
  margin-left: 30px;
}

/* .name{
  margin-left: 50px;
} */

.iname {
  margin-left: 62px;
  border-radius: 10px;
  
}

.fname {
  margin-left: 13px;
  border-radius: 2px;
}

.mname {
  margin-left: 9px;
}

.email {
  margin-left: 64px;
}

.date {
  margin-left: 70px;
}

.select {
  margin-left: 16px;
}

.uname {
  margin-left: 25px;
}

.pwd {
  margin-left: 31px;
}

.submit {
  margin-left: 60px;
  margin-top: 1px;
  }
label{
  color: green ;
}
</style>
