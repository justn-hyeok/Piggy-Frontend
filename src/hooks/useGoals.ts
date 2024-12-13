import { useState } from 'react';
import { dummyGoals } from '../utils/dummyData';

export const useGoals = () => {
  const [goals, setGoals] = useState(dummyGoals);
  const [newGoal, setNewGoal] = useState({ name: '', description: '', amount: 0 });

  // 목표 추가
  const addGoal = () => {
    if (goals.length >= 1) {
      alert('목표는 한 개만 추가할 수 있습니다!');
      return;
    }

    if (newGoal.name && newGoal.amount > 0) {
      setGoals([{ id: Date.now(), ...newGoal, saved: 0 }]);
      setNewGoal({ name: '', description: '', amount: 0 });
    } else {
      alert('모든 필드를 입력해야 합니다!');
    }
  };

  // 목표 삭제
  const deleteGoal = (id: number, name: string) => {
    alert(`"${name}" 목표를 취소했습니다!`);
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  // 목표 완료
  const completeGoal = (name: string) => {
    alert(`"${name}" 목표를 완료했습니다!`);
    setGoals([]);
  };

  return {
    goals,
    newGoal,
    setNewGoal,
    addGoal,
    deleteGoal,
    completeGoal,
  };
}; // 푸히히 푸히 푸히히 푸히 푸히히 푸히 푸히 푸힢 ㅁㄴ;ㅣㅏㅁㄴㅇ;ㅣㅏㅓㅁㄴㅇㅌ
