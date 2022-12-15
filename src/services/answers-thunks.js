import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service from "./answers-service"

export const findAnswersThunk = createAsyncThunk(
    'answers/findAnswers', async () =>
        await service.findAnswer()
)


export const deleteAnswersThunk = createAsyncThunk(
    'answers/deleteAnswers',
    async (ansId) => {
        await service.deleteAnswer(ansId)
        return ansId
    })


export const createAnswersThunk=createAsyncThunk(
    'answers/createAnswers',
    async(answer)=>{
        await service.createAnswer(answer);
        return answer;
    }
)

export const updateAnswersThunk =
    createAsyncThunk(
        'answers/updateAnswers',
        async (answer) =>
            await service.updateAnswer(answer)
    )

