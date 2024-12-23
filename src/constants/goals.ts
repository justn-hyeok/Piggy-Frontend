export const GOALS_CONSTANTS = {
    MAX_GOALS: 1,
    INITIAL_GOAL: {
        name: '',
        description: '',
        amount: 0,
    },
} as const;

export const GOALS_MESSAGES = {
    MAX_GOALS: '목표는 한 개만 추가할 수 있습니다!',
    REQUIRED_FIELDS: '모든 필드를 입력해야 합니다!',
    GOAL_DELETED: (name: string) => `"${name}" 목표를 취소했습니다!`,
    GOAL_COMPLETED: (name: string) => `"${name}" 목표를 완료했습니다!`,
} as const;