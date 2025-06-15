<template>
  <div class="flex flex-col justify-center items-center h-screen gap-8">
    <div class="stats stats-vertical lg:stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title">Downloads</div>
        <div class="stat-value">31K</div>
        <div class="stat-desc">Jan 1st - Feb 1st</div>
      </div>
      <div class="stat">
        <div class="stat-title">New Users</div>
        <div class="stat-value">4,200</div>
        <div class="stat-desc">↗︎ 400 (22%)</div>
      </div>
      <div class="stat">
        <div class="stat-title">New Registers</div>
        <div class="stat-value">1,200</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="bg-base-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <!-- row 2 -->
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <!-- row 3 -->
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>