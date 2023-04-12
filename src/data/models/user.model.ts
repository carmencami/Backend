import {Table, Column, Model} from 'sequelize-typescript'
import {STRING, NUMBER} from 'sequelize'

@Table ({
    freezeTableName: true,
    schema: 'prueba-angular',
    tableName: 'users',
    createdAt: false,
    updatedAt: false,
})
export class UserPojo extends Model {
    @Column ({
        primaryKey: true,
        type: STRING,
        field: 'user_id',
        
    })
    user_id: string

    @Column ({
        type: STRING,
        field: 'username'
    })
    username: string

    @Column ({
        type: STRING,
        field: 'email'
    })
    
    email: string

    @Column ({
        type: STRING,
        field: 'password'
    })
    password: string

    @Column ({
        type: STRING,
        field: 'fullname'
    })
    fullname: string

    @Column ({
        type: NUMBER,
        field: 'deposit'
    })
    deposit: number

    @Column ({
        type: STRING,
        field: 'birthdate'
    })
    birthdate: string
}