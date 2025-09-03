

module.exports = [
  {
    source: "FSK",
    eventType: "Intrusion Alarm",
    triggeredAt: "2025-09-03T08:15:00.000Z",
    zone: "Zone 1/Door",
    transmitter: {
      connect: { id: "b18d4280-2ab9-44ff-af18-7b134f3ecbd5" },
    },
  },
  {
    source: "OLA",
    eventType: "Intrusion Alarm",
    triggeredAt: "2025-09-03T09:45:00.000Z",
    zone: "Zone 3/Window",
    transmitter: {
      connect: { id: "4880d99e-1ee5-43f1-ae6c-f57a2b3fa866" },
    },
  },
  {
    source: "FSK",
    eventType: "Panic Alarm",
    triggeredAt: "2025-09-03T11:10:00.000Z",
    zone: "Zone 5",
    transmitter: {
      connect: { id: "172bfccc-5514-4023-9e38-e23734bc346a" },
    },
  },
];
