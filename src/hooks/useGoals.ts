// hooks/useGoals.ts
import { useState } from 'react';
import { Goal, NewGoal } from '../types/goals';
import { GOALS_CONSTANTS, GOALS_MESSAGES } from '../constants/goals';
// import { validateNewGoal } from '../utils/goalValidation';

export const useGoals = () => {
    const [goals, setGoals] = useState<Goal[]>([]);
    const [newGoal, setNewGoal] = useState<NewGoal>(GOALS_CONSTANTS.INITIAL_GOAL);
    const [error, setError] = useState<string | null>(null);

    const addGoal = () => {
    try {
        if (goals.length >= GOALS_CONSTANTS.MAX_GOALS) {
        throw new Error(GOALS_MESSAGES.MAX_GOALS);
    }
    // validateNewGoal(newGoal);

    setGoals([{ 
        id: Date.now(),
        ...newGoal,
        saved: 0 
    }]);
    setNewGoal(GOALS_CONSTANTS.INITIAL_GOAL);
    setError(null);
    } catch (e) {
        setError(e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.');
    }
};

    const deleteGoal = (id: number, name: string) => {
        setGoals(prev => prev.filter(goal => goal.id !== id));
        alert(GOALS_MESSAGES.GOAL_DELETED(name));
    };

    const completeGoal = (name: string) => {
        setGoals([]);
        alert(GOALS_MESSAGES.GOAL_COMPLETED(name));
    };

    return {
        goals,
        newGoal,
        error,
        setNewGoal,
        addGoal,
        deleteGoal,
        completeGoal,
    };
};