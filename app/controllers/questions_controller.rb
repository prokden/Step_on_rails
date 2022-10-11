class QuestionsController < ApplicationController
    def index
        @questions = Question.all
    end

    def new
        @questions = Question.new
    end

    def create 
        render plain: params
    end
end