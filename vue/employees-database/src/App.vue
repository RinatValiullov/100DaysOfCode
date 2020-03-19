<template>
  <div id="app" class="small-container">
    <h1>Employees Table</h1>

    <employee-table v-bind:employees="employees" />
    <employee-form @add:employee="addEmployee" />
  </div>
</template>

<script>
import EmployeeTable from "@/components/EmployeeTable.vue";
import EmployeeForm from "@/components/EmployeeForm.vue";

export default {
  name: "app",
  components: {
    EmployeeTable,
    EmployeeForm
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Richard Hendricks",
          email: "richard@piedpiper.com"
        },
        {
          id: 2,
          name: "Bertram Gilfoyle",
          email: "gilfoyle@piedpiper.com"
        },
        {
          id: 3,
          name: "Dinesh Chugtai",
          email: "dinesh@piedpiper.com"
        }
      ]
    };
  },
  methods: {
    addEmployee(employee) {
      const lastId =
        this.employees.length > 0
          ? this.employees[this.employees.length - 1].id
          : 0;

      const id = lastId + 1;

      const newEmployee = { ...employee, id };

      this.employees = [...this.employees, newEmployee];
    }
  }
};
</script>

<style>
button {
  background-color: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
