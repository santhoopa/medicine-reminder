const express=require('express');
const router=express.Router();

router.get("/api/getMedicineData",(req,res,next) => {
  res.status(201).json({
    medicines:[
      {
        medicineID:1,
        medicineName:"Paracetamol",
        morningDose:"2 tablets",
        noonDose:"null",
        nightDose:"2 tablets",
      },
      {
        medicineID:2,
        medicineName:"Panadol",
        morningDose:"2 tablets",
        noonDose:"null",
        nightDose:"2 tablets",
      },
      {
        medicineID:3,
        medicineName:"Piriton",
        morningDose:"2 tablets",
        noonDose:"null",
        nightDose:"2 tablets",
      }
    ]

  });
});

module.exports=router;
