# frozen_string_literal: true

class Api::SavesController < ApplicationController
  def index
    @saves = Save.all
    render :index
  end

  def create
    @save = Save.new(save_params)

    if @save.save
      render :index
    else
      render json: @save.errors.full_messages, status: 422
    end
  end

  def destroy
    @save = Save.find_by(id: params[:id])
    @save.destroy
  end

  def save_params
    param.require(:save).permit(:id, :item_id, :item_type, :user_id)
  end
end
