const exercises = [
  {
    name: 'Cross-over upper blocks',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Alternate dumbbell press with wrist bends',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Alternating arm bends with dumbbells',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Arm curl on Larry-Scott bench',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Arm curl on Larry-Scott Bench Press',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Arms and dumbells in "hammer"grip',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Arms extension with the upper block handle with a grip from below',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Arms forward with one dumbbell',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Arms out to the sides on the machine',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Back armlines with machine handles',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Barbell pulls',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Bench press',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Bench press "Pull-over"',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Bench Press from behind the head in sitting position',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Bench press from the chest in sitting position',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Bench press on an horizontal bench',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Bench press on an incline bench',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Bench press with barbell on a sloping bench',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Bench press with narrow grip',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Chest squat',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Concentric flexion of one arm with dumbbell',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Cross back hands from lower blocks',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Cross back hands from upper blocks',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Cross bar between legs',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Dead weights with barbell',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Deadlifts with barbell on straight legs',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Donkey bend toe lift',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Dumbbell and barbell shrugs',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Dumbbell curls',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Dumbbell curls on a slanting bench',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Dumbbell curls to the side',
    category: 'Shoulder Muscles ',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Dumbbell lunges',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Dumbbell press on a slanting bench',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Dumbbell pulling from behind the head lying down "Pull-over"',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Dumbbell side lift with one arm lying on your side',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Dumbbell side raises in forward bending position',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Dumbbell squats',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Dumbbell squeeze',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Dumbbell up in front with alternate wrist curls',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Dumbbell press sitting down',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Front and back press',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Front barbell lift',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Front shoulder extension',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'Glute bridge lying down',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Good morning move torso raise',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Hack Squat',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Hip extension backwards in the crossover',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Kick out to side with machine lever',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Knee back squat with barbell',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Knee back squat on the floor',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Knee back squats from the lower block',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Knee curls',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Knee side to side from lower block',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Knee up in a crouch',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Knees up in the air',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Lateral standing bends',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Lateral trunk lifts on a Roman stool',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Lean back squat',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Leg curls',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Leg extension on the machine',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Lean back squat',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Leg curls',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Leg raises on an incline bench',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Lifting deadlift Sumo',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Lower Block Lifts',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Lumbar spine curls',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Lunges with barbell on shoulders',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Machine pulls',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'One arm back arch with dumbbell',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'One arm curl with upper block grip from below',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'One arm extension with dumbbell from behind the head',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'One arm lift forward from lower block',
    category: 'Shoulder Muscles',
    icon: 'https://i.ibb.co/JFWbkyG/Group-6873.png',
  },
  {
    name: 'One arm curl with lower block handle',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'One-handed dumbbell pulls',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'One-leg toe lift',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Pelvic elevation supported on bench',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Press ups on bars',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Pulling up on a special bar',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Pulling up on the bar with a grip from below',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Push-ups off floor',
    category: 'Pectoral',
    icon: 'https://i.ibb.co/kmxDBfJ/Group-6874.png',
  },
  {
    name: 'Reverse hyperextension',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Romanian pull',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Rotation of the trunk on an apparatus',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Russian kettlebell lifting',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Seated leg curl',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Shin curl with barbell on knees',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Shin curls in sitting position',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Shoulder barbell squat',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Side leg thrusts lying on side',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Single leg press',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Sitting down',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Standing barbell tilt weights',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Standing leg curl',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Standing toe lift',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Sumo squat',
    category: 'Hip',
    icon: 'https://i.ibb.co/1M7VLjJ/Group-6877.png',
  },
  {
    name: 'Sumo style dead weights',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'T barbell curls',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'T barbell curls with shoulder rest',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Torso curl on Brench Press',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Torso curl with shin on bench',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Torso curl with upper bar',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Torso curls on the floor',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Torso lifts',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Torso lifts on an incline bench ',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Torso lifts on an upright bench',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Torso turns with bar',
    category: 'Press',
    icon: 'https://i.ibb.co/86thbfw/Group-6871.png',
  },
  {
    name: 'Triceps push-up with back to bench',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Upper arm curl',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Upper Block Front Stretch',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Upper Block Neck Pulls',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Upper Block Straight Arms',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Upper Block Stretch with Narrow Grip',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Vertical pulls',
    category: 'Wings',
    icon: 'https://i.ibb.co/vsV1SCc/Group-6875.png',
  },
  {
    name: 'Wide squat',
    category: 'Leg Muscles',
    icon: 'https://i.ibb.co/sFmb4vr/Group-6876.png',
  },
  {
    name: 'Wrist curls with barbell lower grip',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
  {
    name: 'Wrist curls with barbell upper grip',
    category: 'Arm Muscles',
    icon: 'https://i.ibb.co/zfjYx3N/Group-6872.png',
  },
];
module.exports = exercises;
