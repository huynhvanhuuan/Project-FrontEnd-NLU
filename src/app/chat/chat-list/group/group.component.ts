
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../chat.service';
@Component({
    selector: 'group-chat',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css'],
})

export class GroupComponent implements OnInit {
    nameRoom: any;
    groupList: any;

    constructor(private _chatService: ChatService) {
        this.groupList = this._chatService.groupList;
    }

    ngOnInit(): void { }

    createRoom = () => {
        this._chatService.createRoom({ name: this.nameRoom });
        this.nameRoom = "";
    };

    joinRoom = () => {
        this._chatService.joinRoom({ name: this.nameRoom });
        this.nameRoom = "";
    };
    getRoomChatMessage = (name: any) => {
		this._chatService.getRoomChatMessage(name);
	}
}
