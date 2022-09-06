import React from 'react'

const Modal = ({message}) => {
  return (
    <>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-center ">
             {message}     
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Modal;
