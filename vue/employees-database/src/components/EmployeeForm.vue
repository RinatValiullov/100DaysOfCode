<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit">
      <label for="employeeName">Employee Name</label>
      <input v-model="employee.name" type="text" id="employeeName" />
      <label for="employeeEmail">Employee Email</label>
      <input v-model="employee.email" type="text" id="employeeEmail" />
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  data() {
    return {
      employee: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      // eslint-disable-next-line
      this.$emit("add:employee", this.employee);
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2px;
}
</style>