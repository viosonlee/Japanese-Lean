import { N5_LESSONS } from '../constants';

interface AudioTask {
  filename: string;
  text: string;
}

export const generateAudioTasks = () => {
  const tasks: AudioTask[] = [];

  N5_LESSONS.forEach(lesson => {
    // Vocab
    lesson.vocabularies.forEach(v => {
      tasks.push({
        filename: `L${lesson.id}_${v.id}.mp3`,
        text: v.kana || v.kanji
      });
    });

    // Sentences
    lesson.readings.forEach(section => {
      section.content.forEach(s => {
         tasks.push({
            filename: `L${lesson.id}_${section.id}_${s.id}.mp3`,
            text: s.japanese
         });
      });
    });
  });

  return tasks;
};

export const downloadAudioConfig = () => {
    const tasks = generateAudioTasks();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tasks, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "n5_audio_tasks.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};