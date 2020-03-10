# frozen_string_literal: true

class Api::DocumentsController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def index
    @documents = Document.all
    render "api/documents/index"
  end

  def show
    @document = Document.find_by(id: params[:id]).with_attached_file
    render "api/documents/show"
  end

  def create
    @document = Document.new(document_params)
    if @document.save
      render "api/documents/show"
    else
      render json: @document.errors.full_messages, status: 422
    end
  end

  def update
    @document = Document.find_by(id: params[id])

    if UpdateDocumentService.new(@document, document_params).call
      render "api/documents/show"
    # if @document.update(document_params)
    #   render :show
    else
      render json: @document.errors.full_messages, status: 422
    end
  end

  def destroy
    @document = Document.find_by(id: params[:id])
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
      :user_id,
      :file
    )
  end
end
