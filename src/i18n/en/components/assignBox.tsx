const assignBox = {
  form: {
    generalForm: {
      header: 'Driver Assignment Advanced Settings',
      actions: {
        saveCheckBox: 'Save as default',
      },
      formBtns: {
        btnCancel: 'Cancel',
        btnAssign: 'Assign',
      },
      inputAssignBy: 'Assign by',
      inputActualDrivers: 'Actual drivers',
      inputVirtualDrivers: 'Virtual drivers',
    },
    actualForm: {
      information: {
        inputOnlyDrivers: 'Only Drivers with Shifts',
        inputMaxShiftsHours: 'Max Shifts Hours',
        defaultCarLocation: 'Default Car Location',
        inputMaxPrice: 'Max Price',
        inputFillVirtual: 'Fill unassigned with virtual drivers',
        inputMaxTrips: 'Max Trips',
        inputMinimizeDrivers: 'Minimize Drivers',
        inputAssignFairly: 'Assign Fairly',
      },
      validations: {
        onlyWithShifts: {
          require: 'Required',
        },
        maxShifts: {
          require: 'Required',
          min: 'At least 1',
          max: 'Maxium 24',
        },
        carLocation: {
          require: 'Required',
        },
        fillVirtual: {
          require: 'Required',
        },
        maxTrips: {
          require: 'Required',
        },
        maxPrice: {
          require: 'Required',
        },
        default: {
          require: 'Required',
        },
      },
    },
    virtualForm: {
      information: {
        inputUpTo: 'Up to',
        inputDrivers: 'Drivers',
        inputMaxSeats: 'Max Seats',
        inputMaxShiftsHours: 'Max Shifts Hours',
        defaultCarLocation: 'Default Car Location',
        inputMinimizeDrivers: 'Minimize Drivers',
        inputAssignFairly: 'Assign Fairly',
      },
      validations: {
        limitDrivers: {
          require: 'Required',
        },
        carLocation: {
          require: 'Required',
        },
        maxShifts: {
          require: 'Required',
          min: 'At least 1',
          max: 'Maxium 24',
        },
        default: {
          require: 'Required',
        },
      },
    },
  },
};

export default assignBox;
