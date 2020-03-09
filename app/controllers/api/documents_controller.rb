# frozen_string_literal: true

class Api::DocumentsController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def index
    @documents = Document.all
    render :index
  end

  def show
    @document = Document.find(params[:id])
    render :show
  end

  def create
    @document = Document.new(document_params)

    if @document.save
      render :show
    else
      render json: @document.errors.full_messages, status: 422
    end
  end

  def destroy
    @document = Document.find(params[:id])
    @document.destroy
  end

  private

  def document_params
    params.require(:document).permit(
      :format,
      :title,
      :description,
      :private,
      :thumnail_url,
      :document_url,
      :user_id
    )
  end
end
