const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    proffyValue = {
        name: "Francisco Guedes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "73988954520",
        bio: "Gosto de hackear",
    }

    classValue = {
        subject: 1,
        cost: "1999",
        
    }

    classScheduleValues = [
        {
            weekday: 0,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 220,
            time_to: 1220
        }
    ]
    
    // await createProffy(db, {proffyValue, classScheduleValues, classValue})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "220"
        AND class_schedule.time_to > "1100"
    `)

    console.log(selectClassesSchedules)
})